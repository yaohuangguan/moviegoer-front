import React from "react";
import { Layout as LayoutUI, Menu, Avatar } from "antd";
import avatarLogo from "../../public/icon-512x512.png";
const { Header, Content, Footer } = LayoutUI;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Avatar src={avatarLogo} size="large" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">主页</Menu.Item>
          <Menu.Item key="2">博客</Menu.Item>
        </Menu>
      </Header>

      <Content>{children}</Content>

      <Footer style={{ textAlign: "center" }}>sam yao 2021</Footer>
    </Layout>
  );
};
