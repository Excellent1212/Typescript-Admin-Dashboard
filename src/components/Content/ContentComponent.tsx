import * as React from 'react';
import './ContentComponent.css'
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

interface Props {
    value?: string
}

interface State {
    status? : string
}

class ContentComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Layout className="content" style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    Content
                </Content>
            </Layout>
        )
    }
}

export default ContentComponent;