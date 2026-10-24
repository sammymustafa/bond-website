"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navMenus, demoHref } from "@/content/nav";
import { useDialog } from "./useDialog";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  // True while the open desktop menu was opened by the pointer arriving, so the click that usually follows keeps it open.
  const openedByHover = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close everything on navigation (state is adjusted during render when the path changes, as React recommends).
  const [menusPath, setMenusPath] = useState(pathname);
  if (menusPath !== pathname) {
    setMenusPath(pathname);
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useDialog(isMobileMenuOpen, mobilePanelRef, () => setIsMobileMenuOpen(false));

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  // An open menu makes the bar solid; only scrolling changes its height, so opening a menu does not shift it.
  const solid = isScrolled || openMenu !== null;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-5"} ${
          solid ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/logo/bond-health-icon.png"
              alt="Bond Health"
              width={637}
              height={626}
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
              priority
            />
            <span className="font-display font-bold text-xl sm:text-2xl text-gray-900">Bond Health</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navMenus.map((menu) => {
              const isOpen = openMenu === menu.label;
              const wide = menu.groups.length > 1;
              return (
                <div
                  key={menu.label}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    if (openMenu !== menu.label) {
                      openedByHover.current = true;
                      setOpenMenu(menu.label);
                    }
                  }}
                  onMouseLeave={scheduleClose}
                  onKeyDown={(e) => {
                    if (e.key === "Escape" && isOpen) {
                      setOpenMenu(null);
                      e.currentTarget.querySelector("button")?.focus();
                    }
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                      setOpenMenu((current) => (current === menu.label ? null : current));
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => {
                      if (isOpen && openedByHover.current) {
                        openedByHover.current = false;
                        return;
                      }
                      openedByHover.current = false;
                      setOpenMenu(isOpen ? null : menu.label);
                    }}
                    className={`flex items-center gap-1 px-4 py-2 font-medium text-sm transition-colors rounded-lg hover:bg-gray-50 ${
                      isOpen ? "text-gray-900 bg-gray-50" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {menu.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div
                      className={`absolute top-full pt-3 ${wide ? "left-1/2 -translate-x-1/2" : "left-0"}`}
                      onMouseEnter={cancelClose}
                    >
                      <div
                        className={`rounded-2xl bg-white border border-gray-100 shadow-xl p-4 ${
                          wide ? "grid gap-6 grid-cols-3 w-[760px]" : "w-[320px]"
                        }`}
                      >
                        {menu.groups.map((group, gi) => (
                          <div key={gi}>
                            {group.title && (
                              <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">{group.title}</p>
                            )}
                            <ul className="space-y-0.5">
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="block px-3 py-2 rounded-lg hover:bg-gray-50"
                                    onClick={() => setOpenMenu(null)}
                                  >
                                    <span className="block text-sm font-medium text-gray-900">{item.name}</span>
                                    {item.description && (
                                      <span className="block text-xs text-gray-500 mt-0.5">{item.description}</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {menu.href && (
                          <div className={wide ? "col-span-3 pt-2 border-t border-gray-100" : "pt-2 mt-1 border-t border-gray-100"}>
                            <Link
                              href={menu.href}
                              className="block px-3 py-2 text-sm font-medium text-bond-primary hover:underline"
                              onClick={() => setOpenMenu(null)}
                            >
                              All {menu.label.toLowerCase()} pages
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href={demoHref} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Book a demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu: `invisible` when closed so its links leave the tab order and the accessibility tree */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-60 md:hidden transition-[opacity,visibility] duration-300 ${
          isMobileMenuOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          ref={mobilePanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/images/logo/bond-health-icon.png"
                alt="Bond Health"
                width={637}
                height={626}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display font-bold text-lg text-gray-900">Bond Health</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              data-autofocus
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain p-4">
            {navMenus.map((menu) => {
              const isOpen = mobileOpenMenu === menu.label;
              return (
                <div key={menu.label} className="border-b border-gray-100 last:border-b-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setMobileOpenMenu(isOpen ? null : menu.label)}
                    className="w-full flex items-center justify-between px-3 py-3.5 text-lg font-medium text-gray-800"
                  >
                    {menu.label}
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pb-3">
                      {menu.groups.map((group, gi) => (
                        <div key={gi} className="mb-2">
                          {group.title && (
                            <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{group.title}</p>
                          )}
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-3 py-2 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {menu.href && (
                        <Link
                          href={menu.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm font-medium text-bond-primary"
                        >
                          All {menu.label.toLowerCase()} pages
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <a
                href={demoHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
