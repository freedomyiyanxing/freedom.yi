import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';

/* eslint-disable */

import './index.css';

const dataSource = [
  {
    key: '0',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '1',
    name: '易炎星',
    age: 16,
    address: '西湖区湖底公园2号',
  },
  {
    key: '2',
    name: '易炎星1',
    age: 18,
    address: '西湖区湖底公园4号',
  },
];

const Details = () => {
  const [data, setData] = React.useState(dataSource);

  const handleEdit = (row: any) => {
    console.log(row);
  };

  const handleDelete = (row: { key: string; }) => {
    const arr: any = [];
    data.forEach((item) => {
      if (row.key !== item.key) {
        arr.push(item);
      }
    });
    setData(arr)
  };

  const columns = [
    {
      title: '序号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'actions',
      key: 'actions',
      render: (row: any) => (
        <div>
          <Button onClick={() => handleEdit(row)}>修改</Button>
          <Button onClick={() => handleDelete(row)}>删除</Button>
        </div>
      )
    },
  ];

  console.log(data);
  return (
    <div className="wrapper">
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map((item) => (
                <TableCell key={item.key}>{item.title}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((row, i) => (
              <TableRow key={row.key}>
                {
                  columns.map((item, index) => (
                    <TableCell key={row.key}>
                      {
                        typeof columns[index].render === 'function'
                          ? (columns as any)[index].render(row)
                          : (row as any)[columns[index].dataIndex] || i + 1
                      }
                    </TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
};

export default Details;
