import React from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { UtilityBar } from "./UtilityBar";
import { MainHeader } from "./MainHeader";
import { CategoryNavigation } from "./CategoryNavigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="w-full">
      <AnnouncementBar />
      <UtilityBar />
      <MainHeader />
      <CategoryNavigation />
      <MobileMenu />
    </header>
  );
}
