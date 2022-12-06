import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={467}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='134' cy='134' r='134' />
    <rect x='0' y='284' rx='0' ry='0' width='280' height='33' />
    <rect x='0' y='342' rx='0' ry='0' width='280' height='62' />
    <rect x='0' y='430' rx='0' ry='0' width='120' height='33' />
    <rect x='157' y='430' rx='0' ry='0' width='120' height='33' />
  </ContentLoader>
)

export default Skeleton
