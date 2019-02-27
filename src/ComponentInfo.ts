type VueOption = Dependence | Component | Data | Prop | Method | Watch | Computed
type LifeCycleName = 'beforeCreate' | 'created' | 'beforeMount' | 'mounted' | 'beforeUpdate' | 'updated' | 'beforeDetroy' | 'activated' | 'deactivated'
export interface ImportSpecifer {
  name: string
  type: string
}
export interface Dependence {
  source: string
  comment: string
  specifiers: Array<ImportSpecifer>
}
export interface Component {
  name: string
  comment: string
}
export interface Data {
  name: string,
  value: any
  comment: string
}
export interface Prop {
  name: string
  default?: any
  type?: string | string[] | null
  comment: string
}
export interface Watch {
  name: string
  use: Array<VueOption>
}
export interface Computed {
  name: string
  use: Array<VueOption>
}
export interface Method {
  name: string
  comment: string
  use: Array<VueOption>
}
export interface LifeCycle {
  name: LifeCycleName
  use: Array<VueOption>
}

export default interface ComponentInfo {
  comment: string
  name: string
  dependencies?: Array<Dependence>
  components?: Array<Component>
  data?: Array<Data>
  props?: Array<Prop>
  methods?: Array<Method>
  watches?: Array<Watch>
  computeds?: Array<Computed>
  lifeCycles?: Array<LifeCycle>
}