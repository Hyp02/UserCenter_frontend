import {useRef} from 'react';
import type {ActionType, ProColumns} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {currentUser, deleteUser, queryUsers} from "@/services/ant-design-pro/api";
import {Image, message, Modal} from "antd";


const columns: ProColumns<API.CurrentUser>[] = [

  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '用户id',
    dataIndex: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    copyable: true,
  },
  {
    title: '用户账户',
    dataIndex: 'userAccount',
    copyable: true,
  },
  {
    title: '头像',
    dataIndex: 'avatarUrl',
    // 渲染头像，将头像连接取出来，渲染成图片
    render: (_, record) => (
      <div>
        <Image src={record.avatarUrl} width={100}/>
      </div>
    ),
  },
  {
    title: '性别',
    dataIndex: 'gender',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    copyable: true,
  },
  {
    title: '邮件',
    dataIndex: 'email',
    copyable: true,
  },
  {
    title: '状态',
    dataIndex: 'userStatus',
    valueType: 'select',
    valueEnum: {
      0: {text: '离线', status: 'Default'},
      1: {
        text: '在线',
        status: 'Success',
      },
    },
  },
  {
    title: '星球编号',
    dataIndex: 'planetCode',
  },
  {
    title: '角色',
    dataIndex: 'userRole',
    valueType: 'select',
    valueEnum: {
      0: {text: '普通用户', status: 'Default'},
      1: {
        text: '管理员',
        status: 'Success',
      },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record, _, action) => [

      <a
        key="editUser"
        onClick={() => {
          window.location.href = `/admin/edit-user?editId=${record.id}&userName=${record.username}
                    &userRole=${record.userRole}`;
        }
        }
      >
        编辑
      </a>,
      // 删除按钮
      <a
        key="delete"
        onClick={async () => {
          // 如果是当前登录的用户，
          // const loginUser = await currentUser();
          // message.info(loginUser.id)
          Modal.confirm({
            title: '确认删除',
            content: `您确定要删除id为${record.id}的用户吗？`,
            okText: '确认',
            cancelText: '取消',
            async onOk() {

                // 调用删除接口
                deleteUser(record.id).then(() => {
                  // 删除操作成功后重定向到当前页面
                  window.location.href = window.location.href;
                });

            },
          });
        }}
      >
        删除
      </a>
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      // @ts-ignore
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        const userList = await queryUsers();
        return {
          data: userList
        }
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
      }}
      dateFormatter="string"
      headerTitle="高级表格"
    />
  );
};
