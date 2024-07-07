import { Button, Table } from 'antd';
import type { TableProps } from 'antd';
import VerticalCell from '../../components/table/verticalCell';
import { mockTableData } from '../../assets/mockData/table';
import { mergeTableCells } from '../../utils/table';

const columns: TableProps<any>['columns'] = [
  {
    title: () => <VerticalCell values={['顧客ID', '顧客名']} />,
    render: (_, row) => <VerticalCell values={[String(row.customer?.id), row.customer?.name]} />,
    onCell: (row, index) => ({
      rowSpan: row.rowSpan,
    }),
    width: 120,
  },
  {
    title: () => <VerticalCell values={['入荷依頼ID', '入荷依頼日', '入荷予定日', '入庫日']} />,
    render: (_, row) => <VerticalCell values={[row?.receiveStockDetail?.receiveStock?.code, row?.receiveStockDetail?.receiveStock?.createdAt, row?.receiveStockDetail?.receiveStock?.expectedArrivedOn, row?.receiveStockDetail?.receiveStock?.receivedOn]} />,
    onCell: (row, index) => ({
      rowSpan: row.rowSpan,
    }),
    width: 120,
  },
  {
    title: () => <VerticalCell values={['追跡番号', '注文ID']} />,
    render: (_, row) => <VerticalCell values={[row?.trackingNo, row?.orderDetail?.orderId]} />,
    onCell: (row, index) => ({
      rowSpan: row.rowSpan,
    }),
    width: 120,
  },
  {
    title: () => <VerticalCell values={['拠点', 'スタッフ名']} />,
    render: (_, row) => <VerticalCell values={['日本', '山田太郎']} />,
    onCell: (row, index) => ({
      rowSpan: row.rowSpan,
    }),
    width: 120,
  },
  {
    title: () => <VerticalCell values={['商品ID', '商品写真']} />,
    render: (_, row) => <VerticalCell values={[row?.receiveStockDetail?.product?.id, row?.receiveStockDetail?.product?.productImageUrl]} imgIndex={1} />,
    width: 120,
  },
  {
    title: () => <VerticalCell values={['商品種別', '商品名']} />,
    render: (_, row) => <VerticalCell values={[row?.receiveStockDetail?.product?.productLabelType, row?.receiveStockDetail?.product?.name]} />,
    width: 120,
  },
  {
    title: () => <VerticalCell values={['SKU', '商品サイズ', '商品重量']} />,
    render: (_, row) => <VerticalCell values={[row?.receiveStockDetail?.product?.sku, `${row?.receiveStockDetail?.product?.width}x${row?.receiveStockDetail?.product?.height}x${row?.receiveStockDetail?.product?.depth}`, row?.receiveStockDetail?.product?.weight]} />,
    width: 120,
  },
  {
    title: 'バ-コ-ド管理',
    render: (_, row) => <span>{'12345(FNSKU)'}</span>,
    width: 120,
  },
  {
    title: '入荷依頼数',
    render: (_, row) => <span>{10}</span>,
    width: 150,
  },
  {
    title: '入庫数',
    render: (_, row) => <span>{10}</span>,
    width: 120,
  },
  {
    title: '入荷箱数',
    render: (_, row) => <span>{0}</span>,
    width: 120,
  },
  {
    title: 'ステ一タス',
    render: (_, row) => <span>{'入荷待ち'}</span>,
    width: 150,
  },
  {
    title: 'モ一ル注文ID',
    render: (_, row) => <span>{'11111'}</span>,
    width: 150,
  },
  {
    title: '備考',
    render: (_, row) => <span>{'備考が入ります。備考か入りま寸。'}</span>,
    width: 200,
  },
  {
    title: '管理ㄨモ',
    render: (_, row) => <span>{'備考が入ります。備考が2000元(cny)入ります。'}</span>,
    width: 200,
  },
  {
    title: () => <VerticalCell values={['その他金額総合計', 'その他詳細:単価·数量·合計']} />,
    render: (_, row) => <VerticalCell values={['200元(cny)', '資材費:10元(cny)x10=1000元', '梱包手数料 :10元(cny)x10=1000元']} />,
    width: 240,
  },
  {
    title: '内税',
    render: (_, row) => <span>{'200元(cny)'}</span>,
    width: 120,
  },
  {
    title: '総合計',
    render: (_, row) => <span>{'2200元(cny)'}</span>,
    width: 120,
  },
  {
    title: () => <VerticalCell values={['引落金額', '引落ステ一タス']} />,
    render: (_, row) => <VerticalCell values={['500元(CNY)', '残金あり']} />,
    width: 150,
  },
  {
    title: '操作',
    fixed: 'right',
    key: 'operation',
    width: 100,
    render: (_, row) => (
      <div>
        <Button type="text" className='text-blue-800'>編集</Button>
        <Button type="text" className='text-red-400'>削除</Button>
      </div>
    ),
  },
];

function getTableData() { 
  const tableData: any[] | undefined = [];

  mockTableData.body.receiveStocks.forEach((item: { receiveStockDetails: any[]; }) => {
    item.receiveStockDetails.forEach((childItem: any) => { 
      tableData.push({
        ...item,
        receiveStockDetail: childItem,
      })
    })
  })

  tableData.forEach((item, index) => {
    item.key = index;
  });

  return mergeTableCells(tableData);
}

function ReceiveStockTable() {
  const tableData = getTableData();
  return <Table
    scroll={{ x: 1000 }}
    bordered
    rowKey="key"
    columns={columns}
    dataSource={tableData}
    pagination={false}
  />;
}

export default ReceiveStockTable;