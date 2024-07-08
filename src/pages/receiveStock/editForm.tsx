import { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Modal, DatePicker } from 'antd';

interface ReceiveStockEditFormProps { 
  visible: boolean;
  onClose: () => void;
  onRefresh: () => void;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

function ReceiveStockEditForm(props: ReceiveStockEditFormProps) { 
  const { visible, onClose, onRefresh } = props;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  const handleSave = () => {
    setOpen(false);
    onClose();
    onRefresh();
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (<>
    <Modal
      width={800}
      open={open}
      title="入荷依頼管理編集"
      onCancel={handleClose}
      footer={[
        <Button key="back" onClick={handleClose}>
          閉じる
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          保存＃ホゾン＃
        </Button>,
      ]}
    >
      <Form
        {...layout}
        name="nest-messages"
      >
        <div className='mt-4 mb-4 ml-4'>入荷ID：YP-000000</div>
        <Form.Item label="追跡番号">
          <Input placeholder='入力してください' />
        </Form.Item>
        <Form.Item label="入荷予定日">
          <DatePicker.RangePicker placeholder={['開始日', '終了日']} />
        </Form.Item>
        <Form.Item label="顧客ID" >
          <Input placeholder='入力してください' />
        </Form.Item>
        <Form.Item label="モ一儿注文ID">
          <Input placeholder='入力してください' />
        </Form.Item>
        <Form.Item label="備考">
          <Input.TextArea placeholder='入力してください' />
        </Form.Item>
        ...
      </Form>
    </Modal>
  </>)
}

export default ReceiveStockEditForm;