import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blobToString',
  standalone: true,
})
export class BlobToStringPipe implements PipeTransform {
  transform(blob: Blob): string {
    return URL.createObjectURL(blob);
    // return new Promise((resolve, reject) => {
    //   const reader = new FileReader();

    //   reader.onload = (event) => {
    //     resolve(event.target.result as string);
    //   };

    //   reader.onerror = (event) => {
    //     reject("Error reading Blob as string");
    //   };

    //   reader.readAsText(blob);
    // });
  }
}
