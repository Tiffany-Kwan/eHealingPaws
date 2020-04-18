import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Popover, Row, Select, TimePicker } from 'antd';
import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import TableForm from './components/TableForm';
import FooterToolbar from './components/FooterToolbar';
import styles from './style.less';
//import data1 from '@/mock/ticket'

// import { connect } from 'dva';

// @connect((state) => ({
//   //currentUser: state.user,
//   ticket: state.ticket,
// }))
// export class Tickets extends React.Component {
//   componentDidMount(){
//     this.getTickets();
//   };

//   getTickets = () => {
//     console.log('dispath')
//     const { dispatch } = this.props;
//     const userid = JSON.parse(localStorage.getItem('user')).userId;
//     dispatch({
//       type: 'ticket/newTickets',
//       payload: userid,
//     });
//   };

//   render() {
//     const {
//       ticket: { tickets },
//     } = this.props;
//     console.log('ticket from mock: ', tickets);
//     return <div>All tickets information</div>;
//   };
// }


  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const tableData = [
    {
      
      ticketid: '001',
      userid:'0001',
      petid:'032',
      appttype:'standard',
      status:'SurgeryDateConfirmed',
      starttime:'2019-09-27',
      finishtime:'2019-10-10',
      priority:'4',
      
    },
    {
      ticketid: '002',
      userid:'0007',
      petid:'098',
      appttype:'emergency',
      status:'Surgery Completed',
      starttime:'2019-12-12',
      finishtime:'2019-12-20',
      priority:'3',
    },
    {
      
      ticketid: '003',
      userid:'0023',
      petid:'015',
      appttype:'standard',
      status:'Surgery Completed',
      starttime:'2020-02-16',
      finishtime:'2019-2-27',
      priority:'5',
    },
  ];

  const AdvancedForm = ({ submitting, dispatch }) => {
    const [form] = Form.useForm();
    const [error, setError] = useState([]);

    const getErrorInfo = errors => {
      const errorCount = errors.filter(item => item.errors.length > 0).length;

      if (!errors || errorCount === 0) {
        return null;
      }

      const scrollToField = fieldKey => {
        const labelNode = document.querySelector(`label[for="${fieldKey}"]`);

        if (labelNode) {
          labelNode.scrollIntoView(true);
        }
      };

      const errorList = errors.map(err => {
        if (!err || err.errors.length === 0) {
          return null;
        }

        const key = err.name[0];
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <CloseCircleOutlined className={styles.errorIcon} />
            <div className={styles.errorMessage}>{err.errors[0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        );
      });
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="表单校验信息"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => {
              if (trigger && trigger.parentNode) {
                return trigger.parentNode;
              }

              return trigger;
            }}
          >
            <CloseCircleOutlined />
          </Popover>
          {errorCount}
        </span>
      );
    };

    const onFinish = values => {
      setError([]);
      dispatch({
        type: 'formAndadvancedForm/submitAdvancedForm',
        payload: values,
      });
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
      setError(errorInfo.errorFields);
    };

    return (
      <Form
        form={form}
        layout="vertical"
        hideRequiredMark
        initialValues={{
          members: tableData,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <PageHeaderWrapper content="Edit tickets here">
          
          
          <Card title="Ticket Management" bordered={false}>
            <Form.Item name="members">
              <TableForm />
            </Form.Item>
          </Card>
        </PageHeaderWrapper>
        <FooterToolbar>
          {getErrorInfo(error)}
          <Button type="primary" onClick={() => form?.submit()} loading={submitting}>
            SUBMIT
          </Button>
        </FooterToolbar>
      </Form>
    );
  };

export default connect(({ loading }) => ({
  submitting: loading.effects['formAndadvancedForm/submitAdvancedForm'],
}))(AdvancedForm);


