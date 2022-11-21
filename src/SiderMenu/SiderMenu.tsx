import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "../withRouter";

class SiderMenu extends Component<any, any> {
  items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "/home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/button"}>Button</Link>,
      key: "/button",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/auto-complete"}>AutoComplete</Link>,
      key: "/auto-complete",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/carousel"}>Carousel</Link>,
      key: "/carousel",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/checkbox"}>Checkbox</Link>,
      key: "/checkbox",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/collspan"}>Collspan</Link>,
      key: "/collspan",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/date-picker"}>Date Picker</Link>,
      key: "/date-picker",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/dropdown"}>Dropdown</Link>,
      key: "/dropdown",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/input"}>Input</Link>,
      key: "/input",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/loading"}>Loading</Link>,
      key: "/loading",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/modal"}>Modal</Link>,
      key: "/modal",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/notification"}>Notification</Link>,
      key: "/notification",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/pagination"}>Pagination</Link>,
      key: "/pagination",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/segmented"}>Segmented</Link>,
      key: "/segmented",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/switch"}>Switch</Link>,
      key: "/switch",
      icon: <AppstoreOutlined />,
    },
  ];
  constructor(props: any) {
    super(props);
    console.log('111', this.props.location.pathname);
    
    this.state = {
      current: this.props.location.pathname || "home",
    };
  }
  onClick: MenuProps["onClick"] = (e) => {
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.onClick}
        style={{ width: 256 }}
        selectedKeys={[current]}
        mode="inline"
        items={this.items}
      />
    );
  }
}

export default withRouter(SiderMenu);
