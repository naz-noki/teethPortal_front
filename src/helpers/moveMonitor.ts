const moveMonitor = (monitor: HTMLElement | null, event: MouseEvent) => {
    if(monitor === null) return;

    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;  
    monitor.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
}; 

export default moveMonitor;
