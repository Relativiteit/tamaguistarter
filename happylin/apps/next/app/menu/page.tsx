'use client'

import { UserDetailScreen } from 'app/features/user/detail-screen'
import {MenuCard} from 'app/features/menu/menucard'
import { useParams } from 'solito/navigation'

export default function Page() {
  const { id } = useParams()
  return <MenuCard />
}
