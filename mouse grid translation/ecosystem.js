// snippet of verbose code to illustrate canvas to grid translation

        this.canvas1.addEventListener('click', function (e) {
            // translate from the mouse click in canvas coordinates to grid coordinates
            // and then scale to cell units
            // let wc = Math.floor((e.offsetX - ecoSystem.world.left + ecoSystem.canvas1Loc.x) / ecoSystem.cellWidth);
            // let wr = Math.floor((e.offsetY - ecoSystem.world.top + ecoSystem.canvas1Loc.y) / ecoSystem.cellWidth);
            // verbose code to make explicit what the vector math is for the translation
            // refer to fig 1.png and fig 2.png
            let canvasTopLeft = ecoSystem.canvas1Loc;   // top left of the canvas1
            let gridTopLeft = new JSVector(ecoSystem.world.left,ecoSystem.world.top);  // top left of the grid (world)
            let canvasGridDifference = JSVector.subGetNew(canvasTopLeft,gridTopLeft);
            let canvasGridTranslation = canvasGridDifference;   // the translation is the difference between the two
            let canvasMouseLoc = new JSVector(e.offsetX, e.offsetY);    // mouse click from event record
            // the location of the mouse click in the grid is the sum of the
            // mouse click in the canvas plus the translation
            let gridMouseLoc = canvasMouseLoc.add(canvasGridTranslation);
            // scale gridMouseLoc to cell row and column
            let wc = Math.floor(gridMouseLoc.x/ecoSystem.cellWidth);    // cell column
            let wr = Math.floor(gridMouseLoc.y/ecoSystem.cellHeight);   // cell row

            ecoSystem.cells[wr][wc].occupied = !ecoSystem.cells[wr][wc].occupied;
