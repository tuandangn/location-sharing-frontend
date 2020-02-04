const regions = [
    { name: 'Region 1' },
    { name: 'Region 2' },
    { name: 'Region 3' },
    { name: 'Region 4' },
    { name: 'Region 5' },
    { name: 'Region 6' },
    { name: 'Region 7' },
    { name: 'Region 8' },
    { name: 'Region 9' },
    { name: 'Region 10' }
]
class RegionService {
    getAll() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(regions), 5000);
        });
    }
}
const service = new RegionService();
export default service;