import { Injectable } from '@angular/core';
import { DomServiceService } from './dom-service.service';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(private domService: DomServiceService) { }


  private modalElementId = 'modal-container';
  // private overlayElementId = 'overlay';


  init(component: any, inputs: object, outputs: string[]) {

    let componentConfig = {
      inputs: inputs,
      outputs: outputs
    }

    let hep = this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'show';

    let res = new Array();
    outputs.forEach(element => {
      res[element] = hep.instance[element]
    });

    return res
  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'hidden';

  }
}
