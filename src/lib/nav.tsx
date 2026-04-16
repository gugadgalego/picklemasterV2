import * as React from "react"
import {
  TrophyIcon,
  BuildingsIcon,
  RankingIcon,
  GraduationCapIcon,
  FlagIcon,
  WalletIcon,
} from "@phosphor-icons/react"

export type NavItem = {
  title: string
  url: string
  icon: React.ReactNode
}

export const navItems: NavItem[] = [
  {
    title: "Torneios",
    url: "/dashboard/torneios",
    icon: <TrophyIcon />,
  },
  {
    title: "Confederação",
    url: "/dashboard/confederacao",
    icon: <BuildingsIcon />,
  },
  {
    title: "Rankings",
    url: "/dashboard/rankings",
    icon: <RankingIcon />,
  },
  {
    title: "Cursos",
    url: "/dashboard/cursos",
    icon: <GraduationCapIcon />,
  },
  {
    title: "Federações",
    url: "/dashboard/federacoes",
    icon: <FlagIcon />,
  },
  {
    title: "Financeiro",
    url: "/dashboard/financeiro",
    icon: <WalletIcon />,
  },
]

export function getNavTitle(pathname: string): string {
  const match = navItems.find(
    (item) => pathname === item.url || pathname.startsWith(item.url + "/")
  )
  return match?.title ?? "Dashboard"
}
