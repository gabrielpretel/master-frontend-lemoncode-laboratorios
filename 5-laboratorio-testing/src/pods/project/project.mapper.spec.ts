import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('mapProjectFromApiToVm specs', () => {
  it('should return an empty project when the provided project is undefined', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    //Assert
    const expectedResult: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    expect(result).toStrictEqual(expectedResult);
  });

  it('should return an empty project when the provided project is null', () => {
    // Arrange
    const project: apiModel.Project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    //Assert
    const expectedResult: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    expect(result).toStrictEqual(expectedResult);
  });

  it('should map a valid project and correctly transform its employees array', () => {
    // Arrange
    const validProject: apiModel.Project = {
      id: 'proj-001',
      name: 'Test Project',
      externalId: 'EXT-001',
      comments: 'Test project details',
      isActive: true,
      employees: [
        { id: 'emp-001', employeeName: 'Alice', isAssigned: true },
        { id: 'emp-002', employeeName: 'Bob' },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(validProject);

    //Assert
    const expectedResult: viewModel.Project = {
      id: 'proj-001',
      name: 'Test Project',
      externalId: 'EXT-001',
      comments: 'Test project details',
      isActive: true,
      employees: [
        { id: 'emp-001', employeeName: 'Alice', isAssigned: true },
        { id: 'emp-002', employeeName: 'Bob' },
      ],
    };

    expect(result).toStrictEqual(expectedResult);
  });

  it('should preserve optional properties like externalId and comments when mapping a valid project', () => {
    // Arrange
    const projectWithOptionals: apiModel.Project = {
      id: 'proj-002',
      name: 'Project with Optionals',
      externalId: 'EXT-12345',
      comments: 'This project has optional fields defined',
      isActive: false,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(projectWithOptionals);

    // Assert
    const expectedResult: viewModel.Project = {
      id: 'proj-002',
      name: 'Project with Optionals',
      externalId: 'EXT-12345',
      comments: 'This project has optional fields defined',
      isActive: false,
      employees: [],
    };

    expect(result).toStrictEqual(expectedResult);
  });

  it('should correctly map an employee summary even when optional fields are missing', () => {
    // Arrange
    const projectWithoutOptionals: apiModel.Project = {
      id: 'proj-003',
      name: 'Project without Optionals',
      isActive: false,
      employees: [
        { id: 'emp-001', employeeName: 'Alice', isAssigned: true },
        { id: 'emp-002', employeeName: 'Bob' },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(projectWithoutOptionals);

    // Assert
    const expectedResult: viewModel.Project = {
      id: 'proj-003',
      name: 'Project without Optionals',
      isActive: false,
      employees: [
        { id: 'emp-001', employeeName: 'Alice', isAssigned: true },
        { id: 'emp-002', employeeName: 'Bob' },
      ],
    };

    expect(result).toStrictEqual(expectedResult);
  });

  it('should correctly map a project without employees', () => {
    // Arrange
    const projectWithoutEmployees: apiModel.Project = {
      id: 'proj-004',
      name: 'Project without Employees',
      isActive: false,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(projectWithoutEmployees);

    // Assert
    const expectedResult: viewModel.Project = {
      id: 'proj-004',
      name: 'Project without Employees',
      isActive: false,
      employees: [],
    };

    expect(result).toStrictEqual(expectedResult);
  });
});
