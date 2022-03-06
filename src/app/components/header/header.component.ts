import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/core/context/state/context.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private contextService: ContextService) {}

  ngOnInit(): void {}

  swapMode() {
    this.contextService.swapMode();
  }
}
