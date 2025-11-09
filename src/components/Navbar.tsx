import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Bell, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { GlobalSearchBar } from './GlobalSearchBar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, profile, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/academics', label: 'Academics' },
    { path: '/skills-hub', label: 'Skills' },
    { path: '/career-hub', label: 'Career' },
    { path: '/alumni-network', label: 'Alumni' },
    { path: '/campus-life', label: 'Campus' },
  ];
  
  const unreadCount = 0; // Will be implemented with notifications system

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center text-white font-bold text-xl">
              V
            </div>
            <div className="hidden md:block">
              <div className="text-lg font-bold text-primary">VNIT LMS</div>
              <div className="text-xs text-muted-foreground">Learning Management System</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {!isAuthenticated ? (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/auth">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth">Sign Up</Link>
                </Button>
              </>
            ) : (
              <>
                {/* Global Search */}
                <GlobalSearchBar />

                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      {unreadCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-xs">
                          {unreadCount}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 bg-popover">
                    <div className="px-4 py-3 border-b">
                      <h3 className="font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                        No notifications yet
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Profile Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2 px-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={profile?.avatar || undefined} alt={profile?.name} />
                        <AvatarFallback>{profile?.name?.[0] || 'U'}</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:block text-sm font-medium">
                        {profile?.name?.split(' ')[0] || 'User'}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-popover">
                    <div className="px-2 py-3 border-b">
                      <p className="text-sm font-medium">{profile?.name}</p>
                      <p className="text-xs text-muted-foreground">{profile?.email}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs">
                          <strong>{profile?.points || 0}</strong> Points
                        </span>
                        <span className="text-xs">
                          Rank <strong>#{profile?.rank || 0}</strong>
                        </span>
                      </div>
                    </div>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
