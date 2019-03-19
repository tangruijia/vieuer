import { parseComponent } from 'vue-template-compiler'
import { parse as babelParse } from '@babel/parser'
import * as t from '@babel/types'

export default function scriptToAST (code: string): t.File {
  const sfc = parseComponent(code)
  const ast = babelParse(sfc.script ? sfc.script.content : '', {
    sourceType: 'module',
    plugins: [
      'dynamicImport',
      'jsx'
    ]
  })
  return ast
}
