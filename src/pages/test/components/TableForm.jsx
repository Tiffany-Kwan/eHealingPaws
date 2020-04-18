import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Popconfirm, Table, message } from 'antd';
import React, { useState } from 'react';
import styles from '../style.less';

const TableForm = ({ value, onChange }) => {
  const [clickedCancel, setClickedCancel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [cacheOriginData, setCacheOriginData] = useState({});
  const [data, setData] = useState(value);

  const getRowByKey = (key, newData) => (newData || data)?.filter(item => item.key === key)[0];

  const toggleEditable = (e, key) => {
    e.preventDefault();
    const newData = data?.map(item => ({ ...item }));
    const target = getRowByKey(key, newData);

    if (target) {
      // 进入编辑状态时保存原始数据
      if (!target.editable) {
        cacheOriginData[key] = { ...target };
        setCacheOriginData(cacheOriginData);
      }

      target.editable = !target.editable;
      setData(newData);
    }
  };

  const newMember = () => {
    const newData = data?.map(item => ({ ...item })) || []; // eslint-disable-next-line no-unused-expressions

    newData?.push({
      key: `NEW_TEMP_ID_${index}`,
      workId: '',
      name: '',
      department: '',
      editable: true,
      isNew: true,
    });
    setIndex(index + 1);
    setData(newData);
  };

  const remove = key => {
    const newData = data?.filter(item => item.key !== key);
    setData(newData);

    if (onChange) {
      onChange(newData);
    }
  };

  const handleFieldChange = (e, fieldName, key) => {
    const newData = [...data];
    const target = getRowByKey(key, newData);

    if (target) {
      target[fieldName] = e.target.value;
      setData(newData);
    }
  };

  const saveRow = (e, key) => {
    e.persist();
    setLoading(true);
    setTimeout(() => {
      if (clickedCancel) {
        setClickedCancel(false);
        return;
      }

      const target = getRowByKey(key) || {};

      if (!target.workId || !target.name || !target.department) {
        message.error('请填写完整成员信息。');
        e.target.focus();
        setLoading(false);
        return;
      }

      delete target.isNew;
      toggleEditable(e, key);

      if (onChange) {
        onChange(data);
      }

      setLoading(false);
    }, 500);
  };

  const handleKeyPress = (e, key) => {
    if (e.key === 'Enter') {
      saveRow(e, key);
    }
  };

  const cancel = (e, key) => {
    setClickedCancel(true);
    e.preventDefault();
    const newData = [...data]; // 编辑前的原始数据

    let cacheData = [];
    cacheData = newData.map(item => {
      if (item.key === key) {
        if (cacheOriginData[key]) {
          const originItem = { ...item, ...cacheOriginData[key], editable: false };
          delete cacheOriginData[key];
          setCacheOriginData(cacheOriginData);
          return originItem;
        }
      }

      return item;
    });
    setData(cacheData);
    setClickedCancel(false);
  };

  const columns = [
    
    {
      title: 'ticketID',
      dataIndex: 'ticketid',
      key: 'name',
      width: '10%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              onChange={e => handleFieldChange(e, 'name', record.key)}
              onKeyPress={e => handleKeyPress(e, record.key)}
              placeholder="ticketID"
            />
          );
        }

        return text;
      },
    },


    {
      title: 'userID',
      dataIndex: 'userid',
      key: 'name',
      width: '10%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              onChange={e => handleFieldChange(e, 'name', record.key)}
              onKeyPress={e => handleKeyPress(e, record.key)}
              placeholder="userID"
            />
          );
        }

        return text;
      },
    },

    {
      title: 'petID',
      dataIndex: 'petid',
      key: 'name',
      width: '10%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              onChange={e => handleFieldChange(e, 'name', record.key)}
              onKeyPress={e => handleKeyPress(e, record.key)}
              placeholder="petID"
            />
          );
        }

        return text;
      },
    },

    {
      title: 'apptType',
      dataIndex: 'appttype',
      key: 'name',
      width: '10%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              onChange={e => handleFieldChange(e, 'name', record.key)}
              onKeyPress={e => handleKeyPress(e, record.key)}
              placeholder="appttype"
            />
          );
        }

        return text;
      },
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'name',
      width: '15%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              onChange={e => handleFieldChange(e, 'name', record.key)}
              onKeyPress={e => handleKeyPress(e, record.key)}
              placeholder="status"
            />
          );
        }

        return text;
      },
    },

    {
      title: 'Start Time',
      dataIndex: 'starttime',
      key: 'name',
      width: '15%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              onChange={e => handleFieldChange(e, 'name', record.key)}
              onKeyPress={e => handleKeyPress(e, record.key)}
              placeholder="starttime"
            />
          );
        }

        return text;
      },
    },

    {
      title: 'Finish Time',
      dataIndex: 'finishtime',
      key: 'name',
      width: '15%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              onChange={e => handleFieldChange(e, 'name', record.key)}
              onKeyPress={e => handleKeyPress(e, record.key)}
              placeholder="finishtime"
            />
          );
        }

        return text;
      },
    },

    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'name',
      width: '5%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              onChange={e => handleFieldChange(e, 'name', record.key)}
              onKeyPress={e => handleKeyPress(e, record.key)}
              placeholder="priority"
            />
          );
        }

        return text;
      },
    },

    {
      title: 'Operation',
      key: 'action',
      render: (text, record) => {
        if (!!record.editable && loading) {
          return null;
        }

        if (record.editable) {
          if (record.isNew) {
            return (
              <span>
                <a onClick={e => saveRow(e, record.key)}>Add</a>
                <Divider type="vertical" />
                <Popconfirm title="Be sure to delete this？" onConfirm={() => remove(record.key)}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            );
          }

          return (
            <span>
              <a onClick={e => saveRow(e, record.key)}>Save</a>
              <Divider type="vertical" />
              <a onClick={e => cancel(e, record.key)}>Cancel</a>
            </span>
          );
        }

        return (
          <span>
            <a onClick={e => toggleEditable(e, record.key)}>Edit</a>
            <Divider type="vertical" />
            <Popconfirm title="Be sure to delete this？" onConfirm={() => remove(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          </span>
        );
      },
    },
  ];
  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowClassName={record => (record.editable ? styles.editable : '')}
      />
      <Button
        style={{
          width: '100%',
          marginTop: 16,
          marginBottom: 8,
        }}
        type="dashed"
        onClick={newMember}
      >
        <PlusOutlined />
        新增成员
      </Button>
    </>
  );
};

export default TableForm;
