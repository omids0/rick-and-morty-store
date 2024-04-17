import type { FC } from 'react'

type Props = {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="bg-red-400 w-full min-h-[4rem] flex justify-between items-center p-4">
        <div className="text-white font-bold text-lg font-serif">Rick And Morty Store</div>
        <div className="flex gap-2 text-white">
          <div>basket</div>
          <div>user</div>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

export default MainLayout
