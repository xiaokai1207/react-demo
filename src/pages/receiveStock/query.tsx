import { Card, Form, Select, Input, DatePicker } from 'antd';
import { debounce } from 'lodash-es';

interface ReceiveStockQueryProps {
  onFilter: (params: any) => void;
}

function ReceiveStockQuery(props: ReceiveStockQueryProps) {
  const statusOptions = [
    {
      label: 'status1',
      value: '1',
    },
    {
      label: 'status2',
      value: '2',
    },
    {
      label: 'status3',
      value: '3',
    }
  ]
  const hubsOptions = [
    {
      label: 'hubs1',
      value: '1',
    },
    {
      label: 'hubs2',
      value: '2',
    },
    {
      label: 'hubs3',
      value: '3',
    }
  ]
  const groupOptions = [
    {
      label: 'group1',
      value: '1',
    },
    {
      label: 'group2',
      value: '2',
    },
    {
      label: 'group3',
      value: '3',
    }
  ]
  const employeesOptions = [
    {
      label: 'employees1',
      value: '1',
    },
    {
      label: 'employees2',
      value: '2',
    },
    {
      label: 'employees3',
      value: '3',
    }
  ]

  const onValuesChange = debounce((changedValues: any, allValues: any) => {
    console.log(changedValues, allValues);
    props.onFilter(allValues);
  }, 100);

  return <Card title="" className='mb-4'>
    <Form
      layout="vertical"
      className='flex flex-wrap'
      onValuesChange={onValuesChange}
    >
      <Form.Item name="status" label="ステ一タスで较込み" className='form-item-select'>
        <Select
          mode='multiple'
          allowClear
          showSearch={false}
          options={statusOptions}
          placeholder='選択してください'
        />
      </Form.Item>
      <Form.Item name="hubs" label="抛点で较込み" className='form-item-select'>
        <Select
          mode='multiple'
          allowClear
          showSearch={false}
          options={hubsOptions}
          placeholder='選択してください'
        />
      </Form.Item>
      <Form.Item name="xxx1" label="顧客IDで検索" className='form-item-input'>
        <Input placeholder='入力してください' />
      </Form.Item>
      <Form.Item name="xxx2" label="モ一儿注文ID検索" className='form-item-input'>
        <Input placeholder='入力してください' />
      </Form.Item>
      <Form.Item name="xxx3" label="追跡番号で検索" className='form-item-input'>
        <Input placeholder='入力してください' />
      </Form.Item>
      <Form.Item name="xxx4" label="班で较込み" className='form-item-select'>
        <Select
          mode='multiple'
          allowClear
          showSearch={false}
          options={groupOptions}
          placeholder='選択してください'
        />
      </Form.Item>
      <Form.Item name="xxx5" label="スタッフて较込み" className='form-item-select'>
        <Select
          mode='multiple'
          allowClear
          showSearch={false}
          options={employeesOptions}
          placeholder='選択してください'
        />
      </Form.Item>
      <Form.Item name="xxx6" label="入荷予定日で検索" className='form-item-date'>
        <DatePicker.RangePicker placeholder={['開始日', '終了日']} />
      </Form.Item>
      <Form.Item name="xxx7" label="入荷依頼作成日で検索" className='form-item-date'>
        <DatePicker.RangePicker placeholder={['開始日', '終了日']} />
      </Form.Item>
      <Form.Item name="xxx8" label="注文ID検索" className='form-item-input'>
        <Input placeholder='入力してください' />
      </Form.Item>
    </Form>
  </Card>
}

export default ReceiveStockQuery;