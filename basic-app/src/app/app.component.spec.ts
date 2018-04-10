import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent} from './app.component';

import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListFilterPipe } from './components/shopping-list/shopping-list-filter.pipe';

import { InventoryService } from './services/inventory-service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [InventoryService],
      declarations: [
        AppComponent,
        ProductDetailComponent,
        InventoryListComponent,
        ShoppingListComponent,
        ShoppingListFilterPipe
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Shopping List'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Shopping List');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Shopping List!');
  }));
});
