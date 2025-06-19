"use client"

import { useState, createContext, useContext, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BookOpen, Eye, EyeOff } from "lucide-react"

const AuthContext = createContext(undefined)

// Mock admin credentials - in real app, this would be handled by backend
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "library2024",
  resetCode: "RESET123",
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem("library-admin-auth")
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth)
        if (authData.isAuthenticated && authData.user) {
          setIsAuthenticated(true)
          setUser(authData.user)
        }
      } catch (error) {
        console.error("Error parsing saved auth:", error)
        localStorage.removeItem("library-admin-auth")
      }
    }
    setIsLoading(false)
  }, [])

  const login = (username, password) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const authData = {
        isAuthenticated: true,
        user: { username },
        timestamp: Date.now(),
      }

      setIsAuthenticated(true)
      setUser({ username })

      // Save to localStorage for persistence
      localStorage.setItem("library-admin-auth", JSON.stringify(authData))

      return { success: true }
    }
    return { success: false, error: "Invalid credentials" }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem("library-admin-auth")
  }

  const resetPassword = (resetCode, newPassword) => {
    if (resetCode === ADMIN_CREDENTIALS.resetCode) {
      ADMIN_CREDENTIALS.password = newPassword
      return { success: true }
    }
    return { success: false, error: "Invalid reset code" }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AdminLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [showReset, setShowReset] = useState(false)
  const [resetData, setResetData] = useState({ resetCode: "", newPassword: "" })
  const [resetSuccess, setResetSuccess] = useState(false)
  const { login, resetPassword } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    setError("")
    const result = login(formData.username, formData.password)
    if (!result.success) {
      setError(result.error)
    }
  }

  const handleReset = (e) => {
    e.preventDefault()
    setError("")
    const result = resetPassword(resetData.resetCode, resetData.newPassword)
    if (result.success) {
      setResetSuccess(true)
      setShowReset(false)
      setError("")
      setResetData({ resetCode: "", newPassword: "" })
    } else {
      setError(result.error)
    }
  }

  if (showReset) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>Enter the reset code and your new password</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleReset} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resetCode">Reset Code</Label>
                <Input
                  id="resetCode"
                  type="text"
                  value={resetData.resetCode}
                  onChange={(e) => setResetData({ ...resetData, resetCode: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={resetData.newPassword}
                  onChange={(e) => setResetData({ ...resetData, newPassword: e.target.value })}
                  required
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
                <Button type="button" variant="outline" className="w-full" onClick={() => setShowReset(false)}>
                  Back to Login
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Sign in to access the admin panel</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {resetSuccess && (
              <Alert>
                <AlertDescription>
                  Password reset successfully! You can now login with your new password.
                </AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              <Button type="button" variant="link" className="w-full text-sm" onClick={() => setShowReset(true)}>
                Forgot Password?
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Demo credentials:</p>
            <p>Username: admin | Password: library2024</p>
            <p>Reset Code: RESET123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
