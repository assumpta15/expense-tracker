import React from 'react'
import { IoMdDocument } from 'react-icons/io'
import { LuArrowDown } from 'react-icons/lu'
import moment from 'moment'
import TransactionInfoCard from '../Cards/TransactionInfoCard'

const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Recent Transactions</h5>

        <button className='cards-btn' onClick={onSeeMore}>
          See All <LuArrowDown className='text-base' />
        </button>
      </div>

      <div className='mt-6'>
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === 'expense' ? item.source : item.source}
            icon={<IoMdDocument />}
            date={moment(item.date).format('DD MMM YYYY')}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions
