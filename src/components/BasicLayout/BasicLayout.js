import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import style from "./style.less";
import Link from "umi/link";

export default class BasicLayout extends React.Component {
  componentDidMount() {}
  render() {
    const { Header, Footer, Content } = Layout;
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className={style.logo} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["3"]}>
              <Menu.Item key="1">
                <Link to="/Register">Register</Link>
              </Menu.Item>
              <Menu.Item key="2">Login</Menu.Item>
              <Menu.Item key="3">Language</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16x 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className={style.content}>
              <Link to="/Login">Go to login</Link>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            eHealingPaws Created by group 12 A Team
          </Footer>
        </Layout>
      </div>
    );
  }
}
