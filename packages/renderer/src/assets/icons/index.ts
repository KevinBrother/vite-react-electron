// const files = import.meta.glob('/package/render/src/assets/icons/*.svg') as any

const files = import.meta.glob('../icons/**/*.svg') as any

function getFileModules() {
  const modules = {} as any;
  Object.keys(files).forEach(key => {
    files[key]().then(res => {
      const arr = key.split('/')
      const rName = arr[arr.length - 1] as string;
      modules['#' + rName.replace(/(\.\/module\/|\.svg)/g, '')] = res.default
    })
  });

  Object.keys(modules).forEach(item => {
    modules[item]['namespaced'] = true;
  });

  return modules;
}

const modules = getFileModules();
console.log('svg-----------', modules);


export default modules;
