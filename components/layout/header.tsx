import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronRight } from "lucide-react";
import { navigationData } from "@/data/data_header";

// Shadcn UI Components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F3C623] transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* --- LOGO SECTION --- */}
        <Link href="/" className="flex items-center space-x-3 shrink-0">
          <div className="relative w-10 h-10 transition-transform active:scale-95">
            <Image
              src="/login-logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 leading-none text-base tracking-tight uppercase">
              SMAN 1 KETAPANG
            </span>
            <span className="text-[10px] text-slate-800/70 font-medium tracking-wider uppercase mt-0.5">
              Lampung Selatan
            </span>
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-0">
            {navigationData.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-black/5 focus:bg-black/5 text-slate-900 font-semibold h-9 px-4">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-1 p-3 md:w-[500px] md:grid-cols-2 bg-white rounded-lg shadow-xl border border-slate-100">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50"
                              >
                                <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                                  {child.label}
                                </div>
                                <p className="line-clamp-1 text-[11px] leading-snug text-slate-500 font-medium">
                                  {child.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href || "/"} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent font-semibold text-slate-900 hover:bg-black/5 h-9 px-4"
                    )}>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* MOBILE BURGER */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-black/5 rounded-md">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            {/* Custom Animation: Fade In (data-[state=open]:animate-in data-[state=open]:fade-in) */}
            <SheetContent
              side="right"
              className="w-[70%] p-0 border-none bg-white flex flex-col data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-right-0 duration-300"
            >
              {/* Header Mobile Menu */}
              <SheetHeader className="p-5 bg-[#F3C623] text-left shrink-0">
                <SheetTitle className="flex items-center gap-3">
                  <Image src="/login-logo.png" alt="Logo" width={32} height={32} />
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">Navigasi</span>
                </SheetTitle>
              </SheetHeader>

              {/* Scroll Area Nav */}
              <ScrollArea className="flex-1 px-4 py-4 overflow-y-auto">
                <nav className="flex flex-col gap-1">
                  {navigationData.map((item) => (
                    <div key={item.label} className="py-1">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 active:bg-slate-100 transition-colors"
                        >
                          <span className="text-sm font-bold text-slate-900">{item.label}</span>
                          <ChevronRight size={16} className="text-slate-400" />
                        </Link>
                      ) : (
                        <div className="space-y-1">
                          <span className="px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            {item.label}
                          </span>
                          <div className="flex flex-col gap-0.5 mt-1">
                            {item.children?.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 transition-colors"
                              >
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-slate-800">{child.label}</span>
                                </div>
                                <ChevronRight size={14} className="text-slate-400" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </ScrollArea>

              {/* Footer Mobile (Fixed) */}
              <div className="p-4 border-t border-slate-100 shrink-0">
                <Button className="w-full bg-[#F3C623] hover:bg-[#E2B612] text-slate-900 font-bold h-11 rounded-md shadow-sm">
                  PPDB 2026
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}