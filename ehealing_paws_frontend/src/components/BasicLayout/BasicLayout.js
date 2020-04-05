import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import style from "./style.less";

export default class BasicLayout extends React.Component {
  componentDidMount() {}
  render() {
    const { Header, Footer, Content } = Layout;
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className={style.logo} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Login</Menu.Item>
              <Menu.Item key="2">Sign in</Menu.Item>
              <Menu.Item key="3">Language</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16x 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className={style.content}>Content</div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            eHealingPaws Created by group 12 A Team
          </Footer>
        </Layout>
      </div>
    );
  }
}
