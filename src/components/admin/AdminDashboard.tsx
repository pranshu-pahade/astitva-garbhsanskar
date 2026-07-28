"use client";

import React, { useState } from "react";
import {
  loginAdminAction,
  logoutAdminAction,
  approveReviewAction,
  deleteReviewAction,
} from "@/app/admin/actions";
import { Button } from "@/components/ui/Button";

interface AdminDashboardProps {
  initialIsAuthenticated: boolean;
  initialPendingReviews: any[];
  initialApprovedReviews: any[];
  initialEnquiries: any[];
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  initialIsAuthenticated,
  initialPendingReviews,
  initialApprovedReviews,
  initialEnquiries,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialIsAuthenticated);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "enquiries">("pending");

  const [pendingReviews, setPendingReviews] = useState(initialPendingReviews);
  const [approvedReviews, setApprovedReviews] = useState(initialApprovedReviews);
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const res = await loginAdminAction(passwordInput);
    if (res.success) {
      setIsAuthenticated(true);
      window.location.reload(); // Refresh to load authenticated data
    } else {
      setLoginError(res.error || "Login failed");
    }
  };

  const handleLogout = async () => {
    await logoutAdminAction();
    setIsAuthenticated(false);
  };

  const handleApprove = async (id: string) => {
    setActionLoading(id);
    const res = await approveReviewAction(id);
    if (res.success) {
      const approvedItem = pendingReviews.find((r) => r.id === id);
      setPendingReviews(pendingReviews.filter((r) => r.id !== id));
      if (approvedItem) {
        setApprovedReviews([{ ...approvedItem, status: "approved" }, ...approvedReviews]);
      }
    } else {
      alert("Error approving review: " + res.error);
    }
    setActionLoading(null);
  };

  const handleDelete = async (id: string, isApproved: boolean) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    setActionLoading(id);
    const res = await deleteReviewAction(id);
    if (res.success) {
      if (isApproved) {
        setApprovedReviews(approvedReviews.filter((r) => r.id !== id));
      } else {
        setPendingReviews(pendingReviews.filter((r) => r.id !== id));
      }
    } else {
      alert("Error deleting review: " + res.error);
    }
    setActionLoading(null);
  };

  // Password Gate Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-5 bg-[#FDF7F1]">
        <div className="w-full max-w-md bg-[#F7EDE3] p-8 rounded-[24px] shadow-warm border border-[#F2C0CD] text-center">
          <div className="w-12 h-12 rounded-full bg-[#5E1A3D] text-[#FDF7F1] flex items-center justify-center mx-auto mb-4 text-2xl">
            🔒
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#5E1A3D] mb-2">
            Astitva Owner Portal
          </h1>
          <p className="text-sm text-[#4A3B42] mb-6">
            Enter your admin password to manage pending reviews and enquiries.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            {loginError && (
              <div className="p-3 rounded-xl bg-[#F2C0CD] text-[#7D2352] text-xs font-bold text-center">
                {loginError}
              </div>
            )}
            <div>
              <label htmlFor="admin-password" className="block text-xs font-bold uppercase tracking-wider text-[#5E1A3D] mb-1">
                Admin Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#4A3B42] focus:border-[#9CAF88] focus:ring-1 focus:ring-[#9CAF88] outline-none text-base"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Unlock Portal
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-5 sm:px-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-[#F7EDE3] p-6 rounded-[20px] shadow-warm border border-[#F2C0CD]">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#5E1A3D]">
            Astitva Admin Portal
          </h1>
          <p className="text-xs text-[#9CAF88] font-semibold">
            Manage reviews & customer enquiries on mobile or desktop
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-full bg-[#F2C0CD] text-[#7D2352] font-bold text-xs hover:bg-[#7D2352] hover:text-white transition-colors"
        >
          Logout 🚪
        </button>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center gap-2 mb-8 border-b border-[#F2C0CD] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-colors whitespace-nowrap ${
            activeTab === "pending"
              ? "bg-[#7D2352] text-[#FDF7F1]"
              : "bg-[#F7EDE3] text-[#5E1A3D] hover:bg-[#F2C0CD]"
          }`}
        >
          Pending Reviews ({pendingReviews.length})
        </button>
        <button
          onClick={() => setActiveTab("approved")}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-colors whitespace-nowrap ${
            activeTab === "approved"
              ? "bg-[#7D2352] text-[#FDF7F1]"
              : "bg-[#F7EDE3] text-[#5E1A3D] hover:bg-[#F2C0CD]"
          }`}
        >
          Approved Reviews ({approvedReviews.length})
        </button>
        <button
          onClick={() => setActiveTab("enquiries")}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-colors whitespace-nowrap ${
            activeTab === "enquiries"
              ? "bg-[#7D2352] text-[#FDF7F1]"
              : "bg-[#F7EDE3] text-[#5E1A3D] hover:bg-[#F2C0CD]"
          }`}
        >
          Enquiries ({enquiries.length})
        </button>
      </div>

      {/* TAB 1: PENDING REVIEWS */}
      {activeTab === "pending" && (
        <div className="space-y-4">
          {pendingReviews.length === 0 ? (
            <div className="p-8 text-center bg-[#FDF7F1] rounded-[16px] border border-[#F2C0CD]">
              <p className="text-sm text-[#4A3B42]">No pending reviews to moderate. All caught up! 🎉</p>
            </div>
          ) : (
            pendingReviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#FDF7F1] p-6 rounded-[16px] shadow-warm border border-[#F2C0CD] flex flex-col sm:flex-row justify-between gap-4 items-start"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-base text-[#5E1A3D]">{review.name}</span>
                    {review.pregnancy_month && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D5DEC6] text-[#5E1A3D] font-bold">
                        Month {review.pregnancy_month}
                      </span>
                    )}
                    <span className="text-[#B5703A] text-sm font-bold">★ {review.rating}/5</span>
                  </div>
                  <p className="font-serif italic text-base text-[#4A3B42]">"{review.message}"</p>
                  <p className="text-xs text-[#9CAF88]">
                    Submitted: {new Date(review.created_at).toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleApprove(review.id)}
                    disabled={actionLoading === review.id}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-full bg-[#9CAF88] text-white font-bold text-xs hover:bg-[#7D2352] transition-colors disabled:opacity-50"
                  >
                    Approve ✓
                  </button>
                  <button
                    onClick={() => handleDelete(review.id, false)}
                    disabled={actionLoading === review.id}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-full bg-[#F2C0CD] text-[#7D2352] font-bold text-xs hover:bg-[#B5703A] hover:text-white transition-colors disabled:opacity-50"
                  >
                    Delete ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 2: APPROVED REVIEWS */}
      {activeTab === "approved" && (
        <div className="space-y-4">
          {approvedReviews.length === 0 ? (
            <div className="p-8 text-center bg-[#FDF7F1] rounded-[16px] border border-[#F2C0CD]">
              <p className="text-sm text-[#4A3B42]">No approved reviews published yet.</p>
            </div>
          ) : (
            approvedReviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#FDF7F1] p-6 rounded-[16px] shadow-warm border border-[#F2C0CD] flex flex-col sm:flex-row justify-between gap-4 items-start"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-base text-[#5E1A3D]">{review.name}</span>
                    {review.pregnancy_month && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D5DEC6] text-[#5E1A3D] font-bold">
                        Month {review.pregnancy_month}
                      </span>
                    )}
                    <span className="text-[#B5703A] text-sm font-bold">★ {review.rating}/5</span>
                  </div>
                  <p className="font-serif italic text-base text-[#4A3B42]">"{review.message}"</p>
                  <p className="text-xs text-[#9CAF88]">
                    Published: {new Date(review.created_at).toLocaleString("en-IN")}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(review.id, true)}
                  disabled={actionLoading === review.id}
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#F2C0CD] text-[#7D2352] font-bold text-xs hover:bg-[#B5703A] hover:text-white transition-colors disabled:opacity-50"
                >
                  Unpublish / Delete ✕
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 3: ENQUIRIES */}
      {activeTab === "enquiries" && (
        <div className="space-y-4">
          {enquiries.length === 0 ? (
            <div className="p-8 text-center bg-[#FDF7F1] rounded-[16px] border border-[#F2C0CD]">
              <p className="text-sm text-[#4A3B42]">No customer enquiries received yet.</p>
            </div>
          ) : (
            enquiries.map((item) => (
              <div
                key={item.id}
                className="bg-[#FDF7F1] p-6 rounded-[16px] shadow-warm border border-[#F2C0CD] flex flex-col sm:flex-row justify-between gap-4 items-start"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg text-[#5E1A3D]">{item.name}</span>
                    {item.pregnancy_month && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#F2C0CD] text-[#7D2352] font-bold">
                        Month {item.pregnancy_month}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-bold text-[#7D2352]">📞 {item.phone}</p>
                  {item.email && <p className="text-xs text-[#4A3B42]">✉️ {item.email}</p>}
                  {item.message && (
                    <p className="text-sm text-[#4A3B42] bg-[#F7EDE3] p-3 rounded-xl">
                      "{item.message}"
                    </p>
                  )}
                  <p className="text-xs text-[#9CAF88]">
                    Received: {new Date(item.created_at).toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`tel:${item.phone}`}
                    className="w-full sm:w-auto text-center px-4 py-2.5 rounded-full bg-[#7D2352] text-white font-bold text-xs hover:bg-[#5E1A3D] transition-colors"
                  >
                    Tap to Call 📞
                  </a>
                  <a
                    href={`https://wa.me/${item.phone.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(
                      item.name
                    )},%20this%20is%20Prajakta%20from%20Astitva%20Garbhsanskar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-4 py-2.5 rounded-full bg-[#4CA771] text-white font-bold text-xs hover:bg-[#3D8B5D] transition-colors"
                  >
                    Tap to WhatsApp 💬
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
