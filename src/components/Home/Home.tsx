import React, { useState, useEffect } from 'react'
import { Layout, Menu, Carousel, Button } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './Home.css'

import carousel1 from '../../assets/images/norape.png';
import carousel2 from '../../assets/images/stat.jpg';
import carousel3 from '../../assets/images/realmen.jpg';
import carousel4 from '../../assets/images/lifetime.jpg';
import carousel5 from '../../assets/images/no.jpg';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Home: React.FC = () => {
    const [collapseState, setCollapseState] = useState<boolean>(true);

    const handleCollapse = (collapsed: any) => {
        console.log(collapsed);
        setCollapseState(collapsed)
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
      }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'space-between' }} >
                    <h1 className="text-white px-2">End Rape</h1>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Home
              </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Register as">
                            <Menu.Item key="2">Participant</Menu.Item>
                            <Menu.Item key="3">Pitch an Idea</Menu.Item>
                            <Menu.Item key="4">Demonstration</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="5" icon={<DesktopOutlined />}>
                            Share your Story
              </Menu.Item>
                        <Menu.Item key="6" icon={<DesktopOutlined />}>
                            Support
              </Menu.Item>
                    </Menu>
                </Header>
                <Content >

                    <div className="site-layout-background" id="home">
                        <div className="row row-one">
                            <h2 className="text-white">#justiceforjennifer</h2>
                            <h2 className="text-white">#justiceforbarakat</h2>
                            <h2 className="text-white">#justicefortina</h2>
                            <h2 className="text-white">#justiceforuwa</h2>
                            <div className="mt-10">
                                <Button className="mr-10" type="primary" size="large">Share Your Story</Button>
                                <Button className="ml-10" type="primary" size="large">Support Us</Button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div style={{ width: '60%' }}>
                            <Carousel autoplay>
                                <div>
                                    <img className="carousel-img" src={carousel1} alt="say NO to rape" />
                                </div>
                                <div>
                                    <img className="carousel-img" src={carousel2} alt="say NO to rape" />
                                </div>
                                <div>
                                    <img className="carousel-img" src={carousel3} alt="say NO to rape" />
                                </div>
                                <div>
                                    <img className="carousel-img" src={carousel4} alt="say NO to rape" />
                                </div>
                                <div>
                                    <img className="carousel-img" src={carousel5} alt="say NO to rape" />
                                </div>

                            </Carousel>
                        </div>
                        <div style={{ width: '40%', maxHeight: '80vh', overflow:'scroll',}}>
                        <section className="twitterContainer">
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-tweet-limit="10"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/endrape"
        >
          Tweets by EndRape
        </a>
      </div>
    </section>
                           
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>No2Rape Initiative ©2020 Created by Suu</Footer>
            </Layout>
        </Layout>
    );

}


export default Home;