interface Breakpoint {
  title?: string,
  description?: string,
  content: string
}

interface Slide {
  id: number,
  title: string,
  description?: string,
  breakpoints: Breakpoint[]
}
