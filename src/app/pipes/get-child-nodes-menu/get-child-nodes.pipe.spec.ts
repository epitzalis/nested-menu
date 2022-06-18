import { MenuItem } from '@models/menu-item.model'
import { GetChildNodesPipe } from './get-child-nodes.pipe'

const menu: MenuItem[] = [
  {
    name: 'Bebidas',
    id: 1,
    parentId: null,
  },
  {
    name: 'Gaseosas',
    id: 100,
    parentId: 1,
  },
]

describe('GetChildNodesMenu', () => {
  let pipe: GetChildNodesPipe

  beforeEach(() => {
    pipe = new GetChildNodesPipe()
  })

  it('should create', () => {
    expect(pipe).toBeTruthy()
  })

  it('returns the node correctly', () => {
    const items = pipe.transform(menu, 1)
    expect(items[0]).toEqual(menu[1])
  })

  it('does not return nodes when do not exist', () => {
    const items = pipe.transform(menu, 5)
    expect(items.length).toBe(0)
  })
})
