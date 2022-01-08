import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/organisms/layout/Header";
import { Hooter } from "../components/organisms/layout/Hooter";
import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Products } from "../components/pages/Products";
import { Skill } from "../components/pages/Skill";

export const Router: VFC = memo(() => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Hooter />
    </>
  );
});
