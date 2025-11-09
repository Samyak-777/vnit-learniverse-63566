import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Academics from "./pages/Academics";
import Skills from "./pages/Skills";
import Blogs from "./pages/Blogs";
import Forums from "./pages/Forums";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Professor from "./pages/Professor";
import ProfessorDashboard from "./pages/ProfessorDashboard";
import Auth from "./pages/Auth";
import Reports from "./pages/Reports";
import QuizCreator from "./pages/QuizCreator";
import SkillsHub from "./pages/SkillsHub";
import CareerHub from "./pages/CareerHub";
import AlumniNetwork from "./pages/AlumniNetwork";
import CampusLife from "./pages/CampusLife";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/academics" element={<Academics />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/skill/:skillId" element={<Skills />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/forums" element={
                <ProtectedRoute>
                  <Forums />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute requiredRole="admin">
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="/professor" element={
                <ProtectedRoute requiredRole="professor">
                  <Professor />
                </ProtectedRoute>
              } />
              <Route path="/professor-dashboard" element={
                <ProtectedRoute requiredRole="professor">
                  <ProfessorDashboard />
                </ProtectedRoute>
              } />
              <Route path="/reports" element={
                <ProtectedRoute requiredRole="admin">
                  <Reports />
                </ProtectedRoute>
              } />
              <Route path="/quiz-creator" element={
                <ProtectedRoute requiredRole="professor">
                  <QuizCreator />
                </ProtectedRoute>
              } />
              <Route path="/skills-hub" element={<SkillsHub />} />
              <Route path="/career-hub" element={<CareerHub />} />
              <Route path="/alumni-network" element={<AlumniNetwork />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/research" element={<Research />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
