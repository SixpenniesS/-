function drawLine(startX, startY, endX, endY) {
	var speed = 200
	var hx = (endX - startX) / speed
	var hy = (endY - startY) / speed
	var x1 = startX
	var y1 = startY
	var x2 = endX
	var y2 = endY
	const hh = startX + hx
	const hhh = startY + hy

	const parent = document.querySelector('#parent')
	const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
	line.setAttribute('x1', startX)
	line.setAttribute('y1', startY)
	line.setAttribute('x2', endX)
	line.setAttribute('y2', endY)
	line.setAttribute('stroke', 'black')
	line.setAttribute('stroke-width', 1)
	const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
	var x1 = startX
	var y1 = startY
	var x2 = hh
	var y2 = hhh

	line1.setAttribute('x1', startX)
	line1.setAttribute('y1', startY)
	line1.setAttribute('x2', hh)
	line1.setAttribute('y2', hhh)

	// line.setAttribute('marker-end','url(#markerArrow)');

	line1.setAttribute('stroke', '#fff')
	line1.setAttribute('stroke-width', 1)
	line1.setAttribute('opacity', 1)
	line1.setAttribute('marker-start', 'url(#markerArrow)')

	let mytimer = setInterval(function () {
		if (Math.abs(x1 - endX) < 0.001) {
			x1 = startX
			y1 = startY
			x2 = hh
			y2 = hhh
		} else {
			// alert(111)
			x1 += hx
			y1 += hy
			x2 += hx
			y2 += hy
			line1.setAttribute('x1', x1)
			line1.setAttribute('y1', y1)
			line1.setAttribute('x2', x2)
			line1.setAttribute('y2', y2)
		}
	}, 50)

	parent.appendChild(line1)
	parent.appendChild(line)
}
