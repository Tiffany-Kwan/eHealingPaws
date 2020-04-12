import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert, Button, Tabs } from 'antd';
import styles from './index.less';
import { connect, Link } from 'umi';
import Pet from './Pet';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const { TabPane } = Tabs;

export default () => (
  <PageHeaderWrapper>
    <Tabs defaultActivityKey="1">
      <TabPane key="ticket" tab="Make appointment">
        <Card>
          <Button className={styles.emergencyBtn} size="large" type="primary" shape="round">
            Emergency
          </Button>

          <Button size="large" type="primary" shape="round">
            <Link to="/newTicket">Make a appointment</Link>
          </Button>
        </Card>
      </TabPane>
      <TabPane key="pet" tab="Your Pet">
        <Pet />
      </TabPane>
      <TabPane key="history" tab="Your Appointment">
        your history
      </TabPane>
    </Tabs>
    {/* <p
      style={{
        textAlign: 'center',
        marginTop: 24,
      }}
    ></p> */}
  </PageHeaderWrapper>
);
