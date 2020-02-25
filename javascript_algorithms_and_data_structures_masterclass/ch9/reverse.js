function reverse(str) {
    if (str.length === 0) return "";
    if (str.length === 1) return str;
    let l = str.length;
    return str[l - 1] + reverse(str.slice(1, l-1)) + str[0];
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'