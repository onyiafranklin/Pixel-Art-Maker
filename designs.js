//declearation of global variables
//this variable picks the value of color selected
let color=$('#colorPicker').val();
//this variable picks the table element
const table=$('#pixelCanvas');
 //TODO:this function forms a grid
 /**
* @description This function forms the grid.
* @param {number} gridWidthValue - The width of the grid.
* @param {number} gridHeightValue - The height of the grid.
*/
function makeGrid(gridWidthValue,gridHeightValue) {
		 const size={
					 gridWidthValue:$('#inputWeight').val(),//width of grid
					 gridHeightValue:$('#inputHeight').val()//height of grid
		}
				table.find('tr').remove();//remove any previous table that was there before creating a new one will be formed
			for ( let x=1; x<=size.gridWidthValue;x++){// we form the table row first (tr)
				let xAxes= '<tr>';
				let yAxes='';
					for (let y =1;y<=size.gridHeightValue; y++) {
					yAxes+='<td></td>';	// we then form the table data
				}
				xAxes+=yAxes;//adding of the table row ( opening tag) with the table data
				xAxes+='</tr>';//add the closing tag of the table to form a complete row
				table.append(xAxes);//appending the tr to the table, then the cycle continues again.
			}		
}
// this function tells us what bwill happen when we clik the submit button
 $('#sizePicker').on('submit', function(e){
 	e.preventDefault();//prevents any default actions from the browser
 	makeGrid()// makes a grid
 })
 // this function picks the particular selected color and assigns it to a particular td or table data that was clicked
table.on('click', 'td', function(e){
	if($(e.target).css('background-color') !== color){//cell color is compared to the color selected from the picker
	 	//if color cell different from the selected color with color picker
 		color = $('#colorPicker').val();
 		$(e.target).css('background-color', color);
		color = $(e.target).css('background-color'); // get the color value in RGB notation
	}
	else{
		$(e.target).css('background-color', 'inherit');
 	}
 })
