import React from "react";
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

export const Page = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};