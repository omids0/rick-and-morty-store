const enum PageEnum {
  root = '/',
  signIn = '/auth/sign-in',
  error404 = '/404',
  error500 = '/500'
}

const enum PageStatuses {
  'inProgress' = 'in_progress',
  'hasDefects' = 'has_defects',
  'paid' = 'paid',
  'confirmed' = 'confirmed',
  'updated' = 'updated'
}

const enum DeviceType {
  desktop = 'desktop',
  mobile = 'mobile',
  TabletMaxWidth = '1280'
}

export { PageEnum, DeviceType, PageStatuses }
