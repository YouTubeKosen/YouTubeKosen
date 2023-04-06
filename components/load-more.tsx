import { MouseEventHandler } from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const LoadMore = ({ onClick }: Props) => {
  return (
    <div className='w-[200px] mx-auto'>
      <button id ='show_more_btn' className="w-[200px] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={onClick}>もっと見る</button>
    </div>
  );
}