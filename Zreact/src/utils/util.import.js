import React from 'react'

const LazyImport = file => (React.lazy(() => import("../pages/" + file)))

export default LazyImport;
