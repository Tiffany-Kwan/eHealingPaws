import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert, Button } from 'antd';
import styles from './index.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Button className={styles.emergencyBtn} size="large" type="primary" shape="round">
        Emergency
      </Button>
      <Button size="large" type="primary" shape="round">
        Make a appointment
      </Button>
    </Card>
    <p
      style={{
        textAlign: 'center',
        marginTop: 24,
      }}
    ></p>
  </PageHeaderWrapper>
);
