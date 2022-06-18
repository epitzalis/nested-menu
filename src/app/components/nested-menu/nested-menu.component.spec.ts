import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MenuItem } from '@models/menu-item.model'
import { NestedMenuComponent } from './nested-menu.component'

const menu: MenuItem[] = [
  {
    name: 'Bebidas',
    id: 1,
    parentId: null,
  },
  {
    name: 'Comidas',
    id: 2,
    parentId: null,
  },
  {
    name: 'Limpieza',
    id: 3,
    parentId: null,
  },
  {
    name: 'Gaseosas',
    id: 100,
    parentId: 1,
  },
]

describe('NestedMenuComponent', () => {
  let component: NestedMenuComponent
  let fixture: ComponentFixture<NestedMenuComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NestedMenuComponent,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedMenuComponent)
    component = fixture.componentInstance
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  it('input menu saves the menu and calculates the first level nodes', () => {
    component.menu = menu
    expect(component.nestedMenu.length).toBe(menu.length)
    expect(component.firstLevel.length).toBe(3)
  })

  it('trackBy returns id', () => {
    const id = component.trackByNode(null, menu[0])
    expect(id).toBe(menu[0].id)
  })
})
