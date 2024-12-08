$(function() {
    // Assume `list` is an object representing a list container
    // and `draggedItem` is the item being dragged.
    let list = {
        container: "#myList", // Selector for the list container
        draggedItem: null // Will be set when an item is dragged
    };

    // When dragging starts
    $(list.container).on('dragstart', '.draggable', function(event) {
        list.draggedItem = $(this);
        // Save the original position of the dragged item
        const origPos = $(list.container).children().index(list.draggedItem);
        list.draggedItem.attr("data-origpos", origPos);
    });

    // When dragging ends (or potentially updating positions)
    $(list.container).on('dragend', '.draggable', function(event) {
        const currentPos = $(list.container).children().index(list.draggedItem);
        const originalPos = list.draggedItem.attr("data-origpos");

        // Construct the comparison string
        const currentPosStr = `${$(list.container).index(list)}-${currentPos}`;
        const originalPosStr = `${originalPos}`;

        // Check if the original position is not equal to the current position
        if (originalPosStr != currentPosStr) {
            console.log("The item has been moved.");
            // Perform further actions, such as updating the data model or UI
        } else {
            console.log("The item is still in the original position.");
        }

        // Reset dragged item
        list.draggedItem = null;
    });
});
