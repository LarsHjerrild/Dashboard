import { Injectable } from '@angular/core';
import { DomServiceService } from './dom-service.service';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(private domService: DomServiceService) { }


  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';


  init(component: any, inputs: object, outputs: object) {

    let componentConfig = {
      inputs:inputs,
      outputs:outputs
    }

    let hep = this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';

    return hep
  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
}
}
