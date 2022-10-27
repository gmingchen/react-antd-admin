import Slot from '@/components/slot'

export default function (props) {
  return (
    <div className="overflow-auto flex-item_f-1 flex-box flex_d-column">
      <Slot props={ props } name="headbar"></Slot>
      <Slot props={ props } name="tabsbar"></Slot>
      <div className='flex-item_f-1 overflow-auto'>
        <Slot props={ props }></Slot>
      </div>
    </div>
  )
}
